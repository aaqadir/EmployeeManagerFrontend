import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl: string = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiUrl}/employee/all`);
  }

  public getEmployeeById(employeeId: number): Observable<void> {
    return this.httpClient.get<void>(
      `${this.apiUrl}/employee/find${employeeId}`
    );
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(
      `${this.apiUrl}/employee/add`,
      employee
    );
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(
      `${this.apiUrl}/employee/update`,
      employee
    );
  }

  public deleteEmployeeById(employeeId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.apiUrl}/employee/delete${employeeId}`
    );
  }
}
