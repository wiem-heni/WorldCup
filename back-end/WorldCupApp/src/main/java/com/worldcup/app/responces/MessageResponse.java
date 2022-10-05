package com.worldcup.app.responces;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class MessageResponse {


	private boolean success;
	private String message;
	private String detail;
	
	public MessageResponse(boolean success, String message, String detail) {
		super();
		this.success = success;
		this.message = message;
		this.detail = detail;
	}



}
