using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication_ERP_DAL.Interfaces;
using WebApplication_ERP_DAL.Models;

namespace WebApplication_ERP_DAL.Services
{
    public class AddressDbService : IAddressService
    {
        private readonly string connectionString;

        private readonly SqlConnection _connection;

        //public AddressDbService(SqlConnection connection)
        //{
        //    _connection = connection;
        //}

        public AddressDbService(IConfiguration config)
        {
            _connection = new SqlConnection(config.GetConnectionString("default"));
        }

        protected Address Mapper(SqlDataReader reader)
        {
            var address =  new Address
            {
                Id = (int)reader["Id"],
                Street = (string)reader["Street"],
                Number = (int)reader["Number"],
                PostalCode = (int)reader["PostalCode"],
                Locality = (string)reader["Locality"]
            };

            if (!reader.IsDBNull(reader.GetOrdinal("Box")))
            {
                address.Box = (string)reader["Box"];
            }
            else
            {
                address.Box = null;
            }

            return address;
        }


        public void Create(Address address)
        {
            using (SqlCommand cmd = _connection.CreateCommand())
            {
                string sql = "INSERT INTO Adress (Id, Street, Number, Box, PostalCode, Locality) " +
                    "VALUES(@id, @street, @number, @box, @postalCode, @locality)";

                cmd.CommandText = sql;

                cmd.Parameters.AddWithValue("id", address.Id);
                cmd.Parameters.AddWithValue("street", address.Street);
                cmd.Parameters.AddWithValue("number", address.Number);
                cmd.Parameters.AddWithValue("box", address.Box);
                cmd.Parameters.AddWithValue("postalCode", address.PostalCode);
                cmd.Parameters.AddWithValue("locality", address.Locality);

                _connection.Open();
                cmd.ExecuteNonQuery();
                _connection.Close();
            }
        }

        public void Delete(int id)
        {
            using (SqlCommand cmd = _connection.CreateCommand())
            {
                string sql = "DELETE FROM Adress WHERE Id = @id";
                cmd.CommandText = sql;

                cmd.Parameters.AddWithValue("id", id);

                _connection.Open();
                cmd.ExecuteNonQuery();
                _connection.Close();
            }
        }

        public Address GetById(int id)
        {
            Address address = null;

            using (SqlCommand cmd = _connection.CreateCommand())
            {
                cmd.CommandText = "SELECT * FROM Address WHERE Id = @id";
                cmd.Parameters.AddWithValue("id", id);

                _connection.Open();

                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.Read()) address = Mapper(reader);
                }
                _connection.Close();
            }
            return address;
        }

        public IEnumerable<Address> GetAllAddresses()
        {
            List<Address> game = new List<Address>();

            using (SqlCommand cmd = _connection.CreateCommand())
            {
                cmd.CommandText = "SELECT * FROM Address";

                _connection.Open();

                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        game.Add(Mapper(reader));
                    }
                }
                _connection.Close();
            }
            return game;
        }
    }
}
