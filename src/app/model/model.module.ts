import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule(
    {
        providers: [ProductRepository, StaticDataSource] //Services for dependency injection
    }
)
export class ModelModule { }