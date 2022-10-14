package com.kong_sprout.Plura.member.domain;



public class Member {

    private String id;
    private String password;
    private String nickname;
    private String callNum;
    private int age;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getCallNum() {
        return callNum;
    }

    public void setCallNum(String callNum) {
        this.callNum = callNum;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Member(){
    }

    public Member(String id, String password, String nickname, String callNum, int age){
        this.id = id;
        this.password = password;
        this.nickname = nickname;
        this.callNum = callNum;
        this.age = age;
    }
}
