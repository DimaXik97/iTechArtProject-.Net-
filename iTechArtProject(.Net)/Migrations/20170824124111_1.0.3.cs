using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace iTechArtProject.Net.Migrations
{
    public partial class _103 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserTests_Answers_AnswerId",
                table: "UserTests");

            migrationBuilder.DropIndex(
                name: "IX_UserTests_AnswerId",
                table: "UserTests");

            migrationBuilder.DropColumn(
                name: "AnswerId",
                table: "UserTests");

            migrationBuilder.AddColumn<int>(
                name: "UserTestId",
                table: "Answers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Answers_UserTestId",
                table: "Answers",
                column: "UserTestId");

            migrationBuilder.AddForeignKey(
                name: "FK_Answers_UserTests_UserTestId",
                table: "Answers",
                column: "UserTestId",
                principalTable: "UserTests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Answers_UserTests_UserTestId",
                table: "Answers");

            migrationBuilder.DropIndex(
                name: "IX_Answers_UserTestId",
                table: "Answers");

            migrationBuilder.DropColumn(
                name: "UserTestId",
                table: "Answers");

            migrationBuilder.AddColumn<int>(
                name: "AnswerId",
                table: "UserTests",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserTests_AnswerId",
                table: "UserTests",
                column: "AnswerId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserTests_Answers_AnswerId",
                table: "UserTests",
                column: "AnswerId",
                principalTable: "Answers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
