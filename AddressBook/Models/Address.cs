namespace AddressBook.Models;

public class Address
{
    public int? Id {get; set;}
    public string FirstName {get; set;}
    public string LastName {get; set;}
    public string Street {get; set;}
    public string StreetNo {get; set;}
    public string City {get; set;}
    public string PostCode {get; set;}

    public Address() {
        Id = null;
        FirstName = "";
        LastName = "";
        Street = "";
        StreetNo = "";
        City = "";
        PostCode = "";
    }
}