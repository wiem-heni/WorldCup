package com.worldcup.app.sec;

public interface SecurityParams {
    public static final String JWT_HEADER_NAME="Authorization";
    public static final String SECRET="hedimaac@gmail.com";
    public static final long EXPIRATION=24*24*3600;
    public static final String HEADER_PREFIX="Bearer ";
}
