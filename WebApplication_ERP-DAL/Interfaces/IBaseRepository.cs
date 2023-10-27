using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication_ERP_DAL.Interfaces
{
    public interface IBaseRepository<TModel>
    {
        void Delete(string tableName, int id);

        IEnumerable<TModel> GetAll(string tableName);

        TModel GetById(string tableName, int id);
    }
}
