interface ComponentProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const pageInstance = new Page({ title: "Заголовок сторінки" });
pageInstance.pageInfo();
