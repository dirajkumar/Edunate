import { TOGGLE_SIDEBAR } from './types';
import { CHANGE_LINK } from './types';

export function toggleSidebar(toggleVisibility) {
  return {
    type: TOGGLE_SIDEBAR,
    payload: toggleVisibility
  };
}

export function changeLink(toLink) {
  return {
    type: CHANGE_LINK,
    payload: toLink
  };
}
