import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

  const tree = {
 'a': ['b', 'c'],
  'b': ['d', 'e'],
  'c': ['f', 'g'],
  'e': ['h', 'i'],
  'f': ['j', 'k'],
  'd':['l', 'm'],
} as const;

type Tree = typeof tree;
type TreeNode = keyof Tree;

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  readonly tree = tree;
  readonly root: TreeNode = 'a';

 getChildren(node: TreeNode): readonly string[] | null {
    return this.tree[node] || null;
 }

}

