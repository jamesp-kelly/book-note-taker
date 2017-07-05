import deepFreeze from 'deep-freeze';
import ui from '../../reducers/ui';
import { toggleBookForm, selectBook, toggleNoteForm, selectNote } from '../../actions/ui'


describe('ui reducers', () => {
  it('handles the toggle book form reducer', () => {
    const prevState = deepFreeze({
      displayBookForm: false,
      selectedBookId: '',
      displayNoteForm: false,
      selectedNoteId: ''
    });

    const action = toggleBookForm(true);
    const newState = ui(prevState, action);

    expect(newState.displayBookForm).toBeTruthy();
  });

  it('handles the select book reducer', () => {
    const selectedBookId = "1a078a3e-2971-4386-b05e-ad93cf31a0a1";
    const prevState = deepFreeze({
      displayBookForm: false,
      selectedBookId: '',
      displayNoteForm: false,
      selectedNoteId: ''
    });

    const action = selectBook(selectedBookId);
    const newState = ui(prevState, action);

    expect(newState.selectedBookId).toEqual(selectedBookId);
  });

  it('handles the toggle note form reducer', () => {
    const prevState = deepFreeze({
      displayBookForm: false,
      selectedBookId: '',
      displayNoteForm: false,
      selectedNoteId: ''
    });

    const action = toggleNoteForm(true);
    const newState = ui(prevState, action);

    expect(newState.displayNoteForm).toBeTruthy();
  });

  it('handles the select note reducer', () => {
    const selectedNoteId = "1a078a3e-2971-4386-b05e-ad93cf31a0a1";
    const prevState = deepFreeze({
      displayBookForm: false,
      selectedBookId: '',
      displayNoteForm: false,
      selectedNoteId: ''
    });

    const action = selectNote(selectedNoteId);
    const newState = ui(prevState, action);

    expect(newState.selectedNoteId).toEqual(selectedNoteId);
  });
});