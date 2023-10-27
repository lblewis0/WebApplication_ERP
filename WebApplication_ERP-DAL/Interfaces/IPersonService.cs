using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication_ERP_DAL.Models;

namespace WebApplication_ERP_DAL.Interfaces
{
    public interface IPersonService
    {
        void Create(Person person);

        void Delete(int id);

        Person GetById(int id);

        IEnumerable<Person> GetAllPersons();

    }
}
