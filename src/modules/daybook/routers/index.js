export default {
  name: 'dayBook',
  component: () =>
    import(/* webpackChunkName: "daybook" */ '../layout/DayBookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () =>
        import(
          /* webpackChunkName: "no-entry-selected" */ '../views/NoEntrySelected.vue'
        ),
    },
    {
      path: ':id',
      name: 'entry',
      component: () =>
        import(
          /* webpackChunkName: "no-entry-view" */ '../views/EntryView.vue'
        ),
    },
  ],
}
