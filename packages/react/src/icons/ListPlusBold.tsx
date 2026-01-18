import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListPlusBoldProps = Omit<IconBaseProps, 'children'>;

const ListPlusBold = memo(
  forwardRef<SVGSVGElement, ListPlusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 2.1c-.5 0-.9.4-.9.9v1.6H15a.9.9 0 0 0 0 1.8h1.6V17a.9.9 0 0 0 1.8 0v-1.6H20a.9.9 0 0 0 0-1.8h-1.6V12c0-.5-.4-.9-.9-.9" clipRule="evenodd" />
        <path fill="currentColor" d="M9 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM9 10a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 5a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListPlusBold.displayName = 'ListPlusBold';

export { ListPlusBold };
export type { ListPlusBoldProps };
