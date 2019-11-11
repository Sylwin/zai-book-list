import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: any[], value: string, min: number, max: number): any[] {
  		if (!books) return [];
		if (!min) {
			min = 1;
		}
		if (!max) {
			max = Number.MAX_VALUE;
		}

		console.log("size: " + books.length);
		console.log("min: " + min);
		console.log("max: " + max);
		return books.filter(book =>
			book.price >= min && book.price <= max
		);
	}

}