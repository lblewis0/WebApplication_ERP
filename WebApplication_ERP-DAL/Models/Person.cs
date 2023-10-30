using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication_ERP_DAL.Models
{
    public class Person
    {
        public int Id { get; set; }

        public string Firstname { get; set; }

        public string Lastname { get; set; }

        public int Id_Address { get; set; }

        public string Mail { get; set; }

        public string Phone { get; set; }

        public string Cellphone { get; set; }

    }
}
