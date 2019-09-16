using System.ComponentModel.DataAnnotations;

namespace DatingApp.api.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [MaxLength(8, ErrorMessage = "Maximum Length must be 8 characters")]
        [MinLength(4, ErrorMessage = "Minimum Length must be 4 characters")]

        public string Password { get; set; }
    }
}