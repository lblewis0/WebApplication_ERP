using Microsoft.AspNetCore.Mvc;
using WebApplication_ERP.Models.DTOs;
using WebApplication_ERP_DAL.Interfaces;
using WebApplication_ERP_DAL.Models;

namespace WebApplication_ERP.Controllers
{
    public class ContactController : Controller
    {

        private readonly IPersonService _personService;

        private readonly IAddressService _addressService;

        public ContactController(IPersonService personService, IAddressService addressService)
        {
            _personService = personService;
            _addressService = addressService;
        }

        [HttpGet]
        public IActionResult Contacts()
        {
            List<Person> listPerson = _personService.GetAllPersons().ToList();

            List<PersonAddressDTO_Contact> listDTOs = new List<PersonAddressDTO_Contact>();

            foreach(var p in listPerson)
            {
                Address address = _addressService.GetById(p.Id);

                PersonAddressDTO_Contact dto = new PersonAddressDTO_Contact(p, address);

                listDTOs.Add(dto);
            }
            
            return View(listDTOs);

        }

        //public IActionResult GetPersons()
        //{
        //    List<Person> listPerson = _personService.GetAllPersons().ToList();

        //    return Json(listPerson);
        //}
    }
}
