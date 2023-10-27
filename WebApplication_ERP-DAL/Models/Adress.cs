using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication_ERP_DAL.Models
{
    public class Address
    {
        public int Id { get; set; }

        public string Street { get; set; }

        public int Number { get; set; }

        public int Box { get; set; }

        public int PostalCode { get; set; }

        public string Locality { get; set; }
    }
}
