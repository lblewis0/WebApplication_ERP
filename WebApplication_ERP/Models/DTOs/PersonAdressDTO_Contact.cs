using WebApplication_ERP_DAL.Models;

namespace WebApplication_ERP.Models.DTOs
{
    public class PersonAddressDTO_Contact
    {
        public int Id { get; set; }

        public string Firstname { get; set; }

        public string Lastname { get; set; }

        public string Phone { get; set; }

        public string Cellphone { get; set; }

        public string Mail { get; set; }

        public string Street { get; set; }

        public int Number { get; set; }

        public string Box { get; set; }

        public int PostalCode { get; set; }

        public string Locality { get; set; }

        public string Formated_Address { get; set; }

        public PersonAddressDTO_Contact(Person person, Address address)
        {
            Id = person.Id;
            Firstname = person.Firstname;
            Lastname = person.Lastname;
            Phone = person.Phone;
            Cellphone = person.Cellphone;
            Mail = person.Mail;
            Street = address.Street;
            Number = address.Number;
            Box = address.Box;
            PostalCode = address.PostalCode;
            Locality = address.Locality;
            SetFormatedAddress();
        }

        private void SetFormatedAddress()
        {
            Formated_Address = $"{Street} {Number}/{Box}";
        }
    }
}
