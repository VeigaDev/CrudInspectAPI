﻿using Microsoft.EntityFrameworkCore;

namespace InspectAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Inspection> Inspections { get; set; } 
        public DbSet<InspectionType> InspectionTypes { get; set; }
        public DbSet<InspectionStatus> InspectionStatuses { get; set; }
    }
}