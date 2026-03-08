export class Classroom {
  id: string;
  name: string;
  createdAt: Date;
  faculty: string;
  startYear: number;
  endYear: number;
  isactive: boolean;

  constructor(
    id: string,
    name: string,
    createdAt: Date,
    faculty: string,
    startYear: number,
    endYear: number,
    isactive:boolean
  ) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.faculty = faculty;
    this.startYear = startYear;
    this.endYear = endYear;
    this.isactive= isactive;
  }

  // Convert API response to Classroom object
  static fromMap(map: any): Classroom {
    return new Classroom(
      map.id,
      map.name,
      new Date(map.created_at),
      map.faculty,
      map.start_year,
      map.end_year,
      map.isactive
    );
  }

  // Convert Classroom object to API 
  toMap() {
    return {
      id: this.id,
      name: this.name,
      created_at: this.createdAt.toISOString(),
      faculty: this.faculty,
      start_year: this.startYear,
      end_year: this.endYear,
      is_active:this.isactive,
    };
  }
}