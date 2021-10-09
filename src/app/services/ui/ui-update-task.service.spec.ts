import { TestBed } from '@angular/core/testing';

import { UiUpdateTaskService } from './ui-update-task.service';

describe('UiUpdateTaskService', () => {
  let service: UiUpdateTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiUpdateTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
