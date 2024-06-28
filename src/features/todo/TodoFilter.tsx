import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppDispatch } from '@/redux/hooks';
import { useState } from 'react';
import { IFilterBy } from './interfaces';
import { filterByPriority } from './todoSlice';

const TodoFilter = () => {
  const [filterBy, setFilterBy] = useState<IFilterBy>('none');
  const dispatch = useAppDispatch();

  const handleFilter = (priority: string) => {
    setFilterBy(priority as IFilterBy);
    dispatch(filterByPriority(priority as IFilterBy));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-primary-gradient font-semibold text-xl mb-5">
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={filterBy} onValueChange={handleFilter}>
          <DropdownMenuRadioItem value="none">No Filter</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
