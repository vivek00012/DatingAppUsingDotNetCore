using DatingApp.api.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.api.Data
{
    public class DataContext:DbContext
    {
  public DbSet<Value> Values{get;set;}

  public DbSet<User> Users { get; set; }
  public DataContext(DbContextOptions<DataContext> options):base(options){}
        
        
    }
}