using Microsoft.AspNetCore.Mvc;
using AddressBook.Models;

namespace AddressBook.Controllers;

[ApiController]
[Route("/api/[controller]")]

public class AddressesController : ControllerBase
{
    private Db _db;

    public AddressesController(Db db)
    {
        _db = db;
    }

    [HttpGet]
    public IActionResult ShowAddresses()
    {
        var response = _db.Addresses;
        return Ok(response);
    }


    [HttpPost("create")]
    public IActionResult CreateAddress([FromForm] CreateAddress addressModel)
    {
        string[] names = addressModel.Name.Split(" ");
        string firstName = names[0];
        string lastName = names[1];
        int nextId = _db.Addresses.Count + 1;


        var newAddress = new Address()
        {
            Id = nextId,
            FirstName = firstName,
            LastName = lastName,
            Street = addressModel.Street,
            StreetNo = addressModel.StreetNo,
            City = addressModel.City,
            PostCode = addressModel.PostCode
        };

        _db.Addresses.Add(newAddress);

        return Redirect("http://localhost:3006/");
    }

    [HttpPost("edit")]
    public IActionResult EditAddress([FromForm] EditAddress addressModel)
    {
        string[] names = addressModel.Name.Split(" ");
        string firstName = names[0];
        string lastName = names[1];
        var address = _db.Addresses.Find(x => x.Id == addressModel.Id);

        if (address == null)
        {
            return NotFound();
        }

        address.FirstName = firstName;
        address.LastName = lastName;
        address.Street = addressModel.Street;
        address.StreetNo = addressModel.StreetNo;
        address.City = addressModel.City;
        address.PostCode = addressModel.PostCode;

        return Redirect("http://localhost:3006/");
    }

    [HttpPost("delete")]
    public IActionResult DeleteAddress([FromForm] DeleteAddress addressModel)
    {
        var address = _db.Addresses.Find(x => x.Id == addressModel.Id);

        if (address == null)
        {
            return NotFound();
        }
        
        _db.Addresses.Remove(address);
        Console.WriteLine("Clicked..");
        return Redirect("http://localhost:3006/");
    }
}
