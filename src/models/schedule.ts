export class Schedule {
    id: string;
    classId: string;
    subjectId: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;

    constructor(
        id: string,
        classId: string,
        subjectId: string,
        dayOfWeek: string,
        startTime: string,
        endTime: string
    ) {

        if (startTime >= endTime) {
            throw new Error("End time must be after start time");
        }
        this.id = id;
        this.classId = classId;
        this.subjectId = subjectId;
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    // Convert API response to Schedule object
    static fromMap(map: any): Schedule {
        return new Schedule(
            map.id,
            map.class_id,
            map.subject_id,
            map.day_of_week,
            map.start_time,
            map.end_time
        );
    }

    // Convert Schedule object to API 
    toMap() {
        return {
            id: this.id,
            class_id: this.classId,
            subject_id: this.subjectId,
            day_of_week: this.dayOfWeek,
            start_time: this.startTime,
            end_time: this.endTime,
        };
    }
}