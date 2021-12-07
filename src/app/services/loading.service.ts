import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class LoadingService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading$$.asObservable();

  getLoading(isLoading: boolean){
    this.isLoading$$.getValue()
  }

  setLoading(isLoading: boolean) {
    this.isLoading$$.next(isLoading);
  }
}
