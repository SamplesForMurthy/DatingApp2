using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(maximumLength:12, MinimumLength =4, ErrorMessage ="Password length should be between 4 and 12")]
        public string Password { get; set; }
    }
}
