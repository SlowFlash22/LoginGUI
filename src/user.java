public class user {
    private int id;
    private String name;
    private String email;
    private int phone;
    private String password;
    private String location;
    private String regdate;

    public user(int id, String name, String email, int phone, String password, String location, String regdate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.location = location;
        this.regdate = regdate;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public int getPhone() {
        return phone;
    }

    public String getPass() {
        return password;
    }

    public String getLocation() {
        return location;
    }

    public String getRegdate() {
        return regdate;
    }

}
