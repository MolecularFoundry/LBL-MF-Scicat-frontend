import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SampleSearchComponent } from "./sample-search.component";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { MockStore } from "shared/MockStubs";
import { Store } from "@ngrx/store";
import { NO_ERRORS_SCHEMA } from "@angular/compiler/src/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("SampleSearchComponent", () => {
  let component: SampleSearchComponent;
  let fixture: ComponentFixture<SampleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule
      ],
      declarations: [
        SampleSearchComponent]
    });
    TestBed.overrideComponent(SampleSearchComponent,  {
      set: {
        providers: [{ provide: Store, useClass: MockStore }]
      }
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
