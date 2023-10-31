namespace AddressBook.Models;

using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

public class EditAddress
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }

    [Required]
    public string Street { get; set; }

    [Required]
    public string StreetNo { get; set; }

    [Required]
    public string City { get; set; }

    [Required]
    public string PostCode { get; set; }

    public EditAddress() {
        Name = "";
        Street = "";
        StreetNo = "";
        City = "";
        PostCode = "";
    }
}