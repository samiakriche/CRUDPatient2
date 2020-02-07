using Microsoft.EntityFrameworkCore;

namespace CRUDPatient.Data
{
    public class CRUDPatientContext : DbContext
    {
        public CRUDPatientContext (
            DbContextOptions<CRUDPatientContext> options)
            : base(options)
        {
        }

        public DbSet<Patient> Patients { get; set; }
    }
}