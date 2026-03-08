export class Student {
  id: string;
  rollNo: number;
  subjectIds: string[];
  avatarUrl: string | null;
  classId: string;
  lastCheckedNotices: Date;

  constructor(
    id: string,
    rollNo: number,
    subjectIds: string[],
    avatarUrl: string | null,
    classId: string,
    lastCheckedNotices: Date
  ) {
    this.id = id;
    this.rollNo = rollNo;
    this.subjectIds = subjectIds;
    this.avatarUrl = avatarUrl;
    this.classId = classId;
    this.lastCheckedNotices = lastCheckedNotices;
  }

  // Convert API response to Student object
  static fromMap(map: any): Student {
    return new Student(
      map.id,
      map.roll_no,
      map.subject_ids ?? [],
      map.avatar_url ?? null,
      map.class_id,
      new Date(map.last_checked_notices)
    );
  }

  // Convert Student object to API 
  toMap() {
    return {
      id: this.id,
      roll_no: this.rollNo,
      subject_ids: this.subjectIds,
      avatar_url: this.avatarUrl,
      class_id: this.classId,
      last_checked_notices: this.lastCheckedNotices.toISOString(),
    };
  }
}