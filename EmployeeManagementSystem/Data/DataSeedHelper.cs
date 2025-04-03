using EmployeeManagementSystem.Entity;

namespace EmployeeManagementSystem.Data
{
    public class DataSeedHelper
    {
        private readonly AppDbContext dbcontext;

        public DataSeedHelper( AppDbContext dbContext) 
        {

            this.dbcontext = dbContext;
        }

        public void InsertData()
        {
            if (!dbcontext.Employees.Any())
            {

                dbcontext.Employees.Add(
                        new Employee { Name = "Hugo" });
                dbcontext.Employees.Add(
                        new Employee { Name = "Diana" });
                dbcontext.Employees.Add(
                        new Employee { Name = "Sandybell" });

                dbcontext.SaveChanges();

            }
        }
    }
}
