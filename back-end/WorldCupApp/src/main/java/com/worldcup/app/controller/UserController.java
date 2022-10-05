package com.worldcup.app.controller;

import lombok.Data;

import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.worldcup.app.entity.AppUser;
import com.worldcup.app.repository.AppUserRepository;
import com.worldcup.app.service.AccountServiceImpl;
import com.worldcup.app.service.UserService;

@RestController
@RequestMapping("api")
public class UserController {
	
    @Autowired
    private AccountServiceImpl accountService;
    @Autowired
    private UserService userService;
    @Autowired
    private AppUserRepository appUserRepository;

    @PostMapping("/register")
    public AppUser registerClient(@RequestBody  UserForm userForm){
        AppUser client = accountService.saveUser(userForm.getUsername(),userForm.getPassword(),userForm.getConfirmedPassword());
        this.accountService.addRoleToUser(userForm.getUsername(),"USER");
        return client;
    }
    
    @PutMapping("/user/profile")
    public void update(@RequestBody  AppUser appUser){
        if(appUserRepository.findByUsername(appUser.getUsername())!=null) {
        	AppUser user = appUserRepository.findByUsername(appUser.getUsername());
        	user.setAddress(appUser.getAddress());
        	user.setEmail(appUser.getEmail());
        	user.setFirstName(appUser.getFirstName());
        	user.setLastName(appUser.getLastName());
        	user.setBirthday(appUser.getBirthday());
        	this.userService.save(user);
        }
    }
    
    @PostMapping("/register-provider")
    public AppUser registerProvider(@RequestBody  UserForm userForm){
        AppUser client = accountService.saveUser(
                userForm.getUsername(),userForm.getPassword(),userForm.getConfirmedPassword());
        this.accountService.addRoleToUser(userForm.getUsername(),"PROVIDER");
        return client;
    }
    
    @GetMapping("/user/profile")
    public AppUser findUser(@RequestParam("username") String username) {
		return this.accountService.loadUserByUsername(username);
	}
    
    
    @PutMapping("/user/profile/uploadPhoto")
    public void uploadPhoto(MultipartFile file, @RequestParam("username") String username) throws Exception{
    	if(appUserRepository.findByUsername(username)!=null) {
    		AppUser user = appUserRepository.findByUsername(username);
    	    user.setImage(file.getOriginalFilename());
    	    Files.write(Paths.get(System.getProperty("user.home")+"/OneDrive/Bureau/VehiclesOntology/images/user/"+user.getImage()),file.getBytes());
    	    this.userService.save(user);
    	}
    }
    
    @GetMapping(path="/user/profile/image/{username}",produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getPhoto(@PathVariable("username") String username) throws Exception{
    	if(appUserRepository.findByUsername(username)!=null) {
    		AppUser user = appUserRepository.findByUsername(username);
    		return Files.readAllBytes(Paths.get(System.getProperty("user.home")+"/OneDrive/Bureau/VehiclesOntology/images/user/"+user.getImage()));
    	}
    	return null;
    }
        
}

class UserForm{
    private String username;
    private String password;
    private String confirmedPassword;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmedPassword() {
		return confirmedPassword;
	}
	public void setConfirmedPassword(String confirmedPassword) {
		this.confirmedPassword = confirmedPassword;
	}
    
    
}
