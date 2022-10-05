package com.worldcup.app.service;

import com.worldcup.app.entity.AppRole;
import com.worldcup.app.entity.AppUser;


public interface AccountService {
    public AppUser saveUser(String username,String password,String confirmedPassword);
    public AppRole save(AppRole role);
    public AppUser loadUserByUsername(String username);
    public void addRoleToUser(String username,String rolename);

}
