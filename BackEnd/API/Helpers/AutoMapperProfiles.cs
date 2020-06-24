using API.DTOs;
using API.Model;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForDetailedDto>().ForMember(dest => dest.PhotoUrl, opt =>
                         opt.MapFrom(src => src.Photos.FirstOrDefault((p => p.IsMain)).Url))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));

            CreateMap<User, UserForListDto>().ForMember(dest=> dest.PhotoUrl, opt => 
                        opt.MapFrom(src => src.Photos.FirstOrDefault((p => p.IsMain)).Url))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));

            CreateMap<Photo, PhotoForDetailedDto>();
        }
    }
}
