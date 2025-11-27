import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endpoint = 'users';

  apiService = inject(ApiService);

  getAllUsers(): Observable<User[]> {
    return this.apiService.get<ApiResponse<User[]>>(this.endpoint)
      .pipe(map(response => response.data || []));
  }

  getUserById(id: string): Observable<User> {
    return this.apiService.get<ApiResponse<User>>(`${this.endpoint}/${id}`)
      .pipe(map(response => response.data as User));
  }

  createUser(user: User): Observable<User> {
    return this.apiService.post<ApiResponse<User>>(this.endpoint, user)
      .pipe(map(response => response.data as User));
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.apiService.put<ApiResponse<User>>(`${this.endpoint}/${id}`, user)
      .pipe(map(response => response.data as User));
  }

  deleteUser(id: string): Observable<any> {
    return this.apiService.delete<ApiResponse<any>>(`${this.endpoint}/${id}`);
  }
  
}
