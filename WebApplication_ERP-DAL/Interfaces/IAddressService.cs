using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication_ERP_DAL.Models;

namespace WebApplication_ERP_DAL.Interfaces
{
    public interface IAddressService
    {
        void Create(Address address);

        void Delete(int id);

        Address GetById(int id);

        IEnumerable<Address> GetAllAddresses();
    }
}
