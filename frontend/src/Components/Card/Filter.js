import React from "react";
import { Form, Input, Select } from "antd";

const Filter = ({ filters, setFilters }) => {
  return (
    <Form layout="inline" className="flex flex-wrap gap-6 p-6 bg-white dark:bg-gray-800 shadow-lg border border-gray-300 dark:border-gray-700 rounded-2xl">
      <Form.Item className="w-full sm:w-1/2 lg:w-1/4">
        <Input
          className="h-12 w-full px-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          placeholder="Search by name"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
      </Form.Item>

      <Form.Item className="w-full sm:w-1/2 lg:w-1/4">
        <Select
          className="h-12 w-full rounded-lg shadow-sm"
          placeholder="Select Color"
          allowClear
          onChange={(value) => setFilters({ ...filters, color: value || "" })}
        >
          <Select.Option value="">All Colors</Select.Option>
          {["Red", "Blue", "Yellow", "White", "Purple", "Black", "Green"].map((color) => (
            <Select.Option key={color.toLowerCase()} value={color.toLowerCase()}>
              {color}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item className="w-full sm:w-1/2 lg:w-1/4">
        <Input
          className="h-12 w-full px-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        />
      </Form.Item>

      <Form.Item className="w-full sm:w-1/2 lg:w-1/4">
        <Input
          className="h-12 w-full px-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:border-gray-600 dark:text-white"
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
      </Form.Item>
    </Form>
  );
};

export default Filter;
