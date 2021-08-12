export default (state, action) => {
  switch (action.type) {
    case 'SAVE_PROFILES_DATA':
      return {
        ...state,
        profiles: action.payload.students,
        filteredProfiles: action.payload.students,
      };
    case 'FILTER_BY_NAME':
      return {
        ...state,
        filteredProfiles: state.profiles.filter(
          (data) => action.payload.regex.test(data.firstName.toLowerCase())
            || action.payload.regex.test(data.lastName.toLowerCase())
            || action.payload.regex.test(
              `${data.firstName.toLowerCase()}${data.lastName.toLowerCase()}`,
            ),
        ),
      };
    case 'FILTER_BY_TAG':
      if (state.tags.length > 0 && action.payload.value === '') {
        return {
          ...state,
          filteredProfiles: state.profiles,
        };
      }
      if (state.tags.length > 0) {
        return {
          ...state,
          filteredProfiles: state.profiles.filter((data) => state.tags.some(
            (tagged) => data.id === tagged.profile.id
                && action.payload.regex.test(tagged.text.toLowerCase()),
          )),
        };
      }
      break;
    case 'FILTER_ALL':
      return {
        ...state,
        filteredProfiles: state.filteredProfiles
          .concat(state.profiles)
          .filter((value, index, self) => self.indexOf(value) === index),
      };
    case 'ADD_TAG':
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    default:
      return state;
  }
  return state;
};
