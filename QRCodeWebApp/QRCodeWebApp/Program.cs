using Microsoft.OpenApi.Models;

internal class Program
{
    private static void Main(string[] args)

    {
        var builder = WebApplication.CreateBuilder(args);
       

        // Add services to the container.

        builder.Services.AddControllers();
        builder.Services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new() { Title = "qrcodewebapp", Version = "v1" });
        });

        //var provider = builder.Services.BuildServiceProvider();
        //var configuration = provider.GetRequiredService<IConfiguration>();

        //builder.Services.AddCors(options =>
        //{
        //    var frontendURL = configuration.GetValue<string>("frontend_url");

        //    options.AddDefaultPolicy(builder =>
        //    {
        //        builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
        //    });
        //});

        builder.Services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
        {
            builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials()
                    .WithOrigins("http://localhost:3000");

        }));

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (builder.Environment.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "webapi v1"));
        }

        app.UseHttpsRedirection();

        app.UseCors("MyPolicy");

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }

    public override bool Equals(object? obj)
    {
        return base.Equals(obj);
    }

    public override int GetHashCode()
    {
        return base.GetHashCode();
    }

    public override string? ToString()
    {
        return base.ToString();
    }
}
