using AddressBook.Models;

public class Db 
{
    public Db()
    {
        Addresses = new List<Address>()
        {
            new Address() { Id = 1, FirstName = "Marcus", LastName = "Brown", Street = "Primrose way", StreetNo = "15", City = "London", PostCode = "LO2 6GB" },
            new Address() { Id = 2, FirstName = "Colin",LastName = "Anderson" , Street = "Highcroft Road", StreetNo = "46", City = "London", PostCode = "LO3 7YG" },
            new Address() { Id = 3, FirstName = "Leah", LastName = "Hamilton" , Street = "Farmers Close", StreetNo = "8", City = "London", PostCode = "LO2 6KL" },  
        };
    }
    public List<Address> Addresses {get; set;}
}