using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using WebApplication_ERP_DAL.Interfaces;
using WebApplication_ERP_DAL.Models;

namespace WebApplication_ERP_DAL.Services
{
    public class PersonDbService : IPersonService
    {
        private readonly string connectionString;

        private readonly SqlConnection _connection;

        //public PersonDbService(SqlConnection connection)
        //{
        //    _connection = connection;
        //}

        public PersonDbService(IConfiguration config)
        {
            _connection = new SqlConnection(config.GetConnectionString("default"));
        }

        protected Person Mapper(SqlDataReader reader)
        {
            var person = new Person
            {
                Id = (int)reader["Id"],
                Firstname = (string)reader["Firstname"],
                Lastname = (string)reader["Lastname"],
                Id_Address = (int)reader["id_Address"],
                Mail = (string)reader["Email"]
            };

            if (!reader.IsDBNull(reader.GetOrdinal("Phone")))
            {
                person.Phone = (string)reader["Phone"];
            }
            else
            {
                person.Phone = null;
            }

            if (!reader.IsDBNull(reader.GetOrdinal("Cellphone")))
            {
                person.Cellphone = (string)reader["Cellphone"];
            }
            else
            {
                person.Cellphone = null;
            }

            return person;

        }

        public void Create(Person person)
        {
            using (SqlCommand cmd = _connection.CreateCommand())
            {
                string sql = "INSERT INTO Person (Id, Firstname, Lastname, id_Address, Email, Phone, Cellphone) " +
                             "VALUES(@id, @firstname, @lastname, @id_address, @email, @phone, @cellphone)";

                cmd.CommandText = sql;
                cmd.Parameters.AddWithValue("id", person.Id);
                cmd.Parameters.AddWithValue("firstname", person.Firstname);
                cmd.Parameters.AddWithValue("lastname", person.Lastname);
                cmd.Parameters.AddWithValue("id_address", person.Id_Address);
                cmd.Parameters.AddWithValue("email", person.Mail);
                cmd.Parameters.AddWithValue("phone", person.Phone);
                cmd.Parameters.AddWithValue("cellphone", person.Cellphone);

                _connection.Open();
                cmd.ExecuteNonQuery();
                _connection.Close();
            }
        }

        public void Delete(int id)
        {
            using (SqlCommand cmd = _connection.CreateCommand())
            {
                string sql = "DELETE FROM Person WHERE Id = @id";
                cmd.CommandText = sql;

                cmd.Parameters.AddWithValue("id", id);

                _connection.Open();
                cmd.ExecuteNonQuery();
                _connection.Close();
            }
        }

        public Person GetById(int id)
        {
            Person person = null;

            using (SqlCommand cmd = _connection.CreateCommand())
            {
                cmd.CommandText = "SELECT * FROM Person WHERE Id = @id";
                cmd.Parameters.AddWithValue("id", id);

                _connection.Open();

                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.Read()) person = Mapper(reader);
                }
                _connection.Close();
            }
            return person;
        }

        public IEnumerable<Person> GetAllPersons()
        {
            List<Person> persons = new List<Person>();

            using (SqlCommand cmd = _connection.CreateCommand())
            {
                cmd.CommandText = "SELECT * FROM Person";

                _connection.Open();

                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        persons.Add(Mapper(reader));
                    }
                }
                _connection.Close();
            }
            return persons;
        }
    }
}
