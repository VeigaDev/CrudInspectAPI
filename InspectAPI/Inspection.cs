using System.ComponentModel.DataAnnotations;

namespace InspectAPI
{
    public class Inspection
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string Status { get; set; } = String.Empty;
        [StringLength(200)]
        public string Coments { get; set; } = String.Empty;
        public int InspectionTypeId { get; set; }
        public InspectionType? InspectionType { get; set; }
    }
}
