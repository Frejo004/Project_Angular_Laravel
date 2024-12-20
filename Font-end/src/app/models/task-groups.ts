import { Task } from "./task";

export interface TaskGroups {
  id:              string;
  titreGroupTasks: string;
  task:            Task[];
  statut:          boolean;

}
