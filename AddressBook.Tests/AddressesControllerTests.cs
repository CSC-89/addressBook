namespace AddressBook.Tests;
using AddressBook.Models;
using AddressBook.Controllers;
using System;

public class AddressesControllerTests
{

    [Fact]
    public void database_exists()
    {
        Db _db = new Db();
        Assert.NotNull(_db);
    }

    [Fact]
    public void database_is_type_Db()
    {
        Db _db = new Db();
        Assert.IsType(typeof(Db), _db);
    }

    [Fact]
    public void create_address_splits_name()
    {
        CreateAddress addressModel = new CreateAddress()
        {
            Name = "Chris Stephens",
            Street = "Sporveisgata",
            StreetNo = "4",
            City = "Oslo",
            PostCode = "0357"
        };

        string[] names = addressModel.Name.Split(" "); 
        string firstName = names[0];
        string lastName = names.Length > 1 ? names[1] : "";

        Assert.NotEmpty(firstName);
        Assert.NotNull(firstName);
        Assert.NotEmpty(lastName);
        Assert.NotNull(lastName);
    }

    [Fact]
    public void create_address_just_first_name()
    {
        CreateAddress addressModel = new CreateAddress()
        {
            Name = "Chris",
            Street = "Sporveisgata",
            StreetNo = "4",
            City = "Oslo",
            PostCode = "0357"
        };

        string[] names = addressModel.Name.Split(" "); 
        string firstName = names[0];
        string lastName = names.Length > 1 ? names[1] : "";
 

        Assert.NotEmpty(firstName);
        Assert.NotNull(firstName);
        Assert.NotNull(lastName);
    }
}
