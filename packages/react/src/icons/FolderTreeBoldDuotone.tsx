import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderTreeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderTreeBoldDuotone = memo(
  forwardRef<SVGSVGElement, FolderTreeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 2a1 1 0 0 1 1 1v1.5C4 5.33 4.67 6 5.5 6H9a1 1 0 0 1 0 2H5.5Q4.68 8 4 7.66v7.99A1.5 1.5 0 0 0 5.5 17H9a1 1 0 1 1 0 2H5.5A3.5 3.5 0 0 1 2 15.68V5l.02-.17L2 4.5V3a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.83 13c.75 0 1.46.38 1.87 1l.34.5h2.71c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25h-5.5C13.01 22 12 21 12 19.75v-4.5c0-1.24 1-2.25 2.25-2.25zm-.58 2a.25.25 0 0 0-.25.25v4.5q.02.23.25.25h5.5q.23-.02.25-.25v-3a.25.25 0 0 0-.25-.25H16.5a1 1 0 0 1-.83-.45l-.63-.94a.3.3 0 0 0-.2-.11zM14.83 2c.75 0 1.46.38 1.87 1l.34.5h2.71c1.24 0 2.25 1 2.25 2.25v3C22 9.99 21 11 19.75 11h-5.5C13.01 11 12 10 12 8.75v-4.5C12 3.01 13 2 14.25 2zm-.58 2a.25.25 0 0 0-.25.25v4.5q.02.23.25.25h5.5q.23-.02.25-.25v-3a.25.25 0 0 0-.25-.25H16.5a1 1 0 0 1-.83-.45l-.63-.94a.3.3 0 0 0-.2-.11z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderTreeBoldDuotone.displayName = 'FolderTreeBoldDuotone';

export { FolderTreeBoldDuotone };
export type { FolderTreeBoldDuotoneProps };
