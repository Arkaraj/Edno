// deno-lint-ignore-file
import { Item } from "../types.ts";

let items: Item[] = [
  {
    id: 1,
    name: "item one",
    description: "This is item one",
    price: 10,
    available: true,
  },
  {
    id: 2,
    name: "item two",
    description: "This is item two",
    price: 20,
    available: true,
  },
  {
    id: 3,
    name: "item three",
    description: "This is item three",
    price: 30,
    available: true,
  },
  {
    id: 4,
    name: "item four",
    description: "This is item four",
    price: 40,
    available: false,
  },
];

const getAllItems = ({ response: res }: { response: any }) => {
  res.status = 200;
  res.body = {
    success: true,
    data: items.filter((it) => it.available == true),
  };
};
const getItem = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const item: Item | undefined = items.find(
    (it) => it.id === parseInt(params.id)
  );

  if (!item) {
    response.status = 404;
    response.body = {
      success: false,
      message: "No item found",
    };
  } else {
    response.status = 200;
    response.body = {
      success: true,
      data: item,
    };
  }
};
const createItems = async ({
  request: req,
  response: res,
}: {
  request: any;
  response: any;
}) => {
  const body = await req.body();
  if (!req.hasBody) {
    res.status = 400;
    res.body = {
      success: false,
      message: "Inavlid Input",
    };
  } else {
    const item: Item = body.value;
    item.id = items.length + 1;
    items.push(item);
    res.status = 201;
    res.body = {
      success: true,
      data: item,
    };
  }
};

const updateItem = async ({
  params,
  request: req,
  response: res,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  const id = parseInt(params.id);
  const body = await req.body();

  if (!id && !body) {
    res.status = 400;
    res.body = {
      success: false,
      message: "Invalid Inputs",
    };
  } else {
    const item: Item | undefined = items.find((it) => it.id == id);
    if (!item) {
      res.status = 400;
      res.body = {
        success: false,
        message: "Enter valid Id",
      };
    } else {
      const newItem: Item = body.value;
      newItem.id = id;
      items[id - 1] = newItem;
      res.status = 200;
      res.body = {
        success: true,
        data: newItem,
      };
    }
  }
};

const deleteItem = ({
  params,
  response: res,
}: {
  params: { id: string };
  response: any;
}) => {
  items = items.filter((it) => it.id !== parseInt(params.id));
  res.body = {
    success: true,
    data: items,
  };
};

export { getAllItems, getItem, createItems, updateItem, deleteItem };
