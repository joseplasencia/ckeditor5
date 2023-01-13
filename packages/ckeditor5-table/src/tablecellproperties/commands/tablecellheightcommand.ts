/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module table/tablecellproperties/commands/tablecellheightcommand
 */

import type { Editor } from 'ckeditor5/src/core';

import TableCellPropertyCommand from './tablecellpropertycommand';
import { addDefaultUnitToNumericValue } from '../../utils/table-properties';

/**
 * The table cell height command.
 *
 * The command is registered by the {@link module:table/tablecellproperties/tablecellpropertiesediting~TableCellPropertiesEditing} as
 * the `'tableCellHeight'` editor command.
 *
 * To change the height of selected cells, execute the command:
 *
 *		editor.execute( 'tableCellHeight', {
 *			value: '50px'
 *		} );
 *
 * **Note**: This command adds the default `'px'` unit to numeric values. Executing:
 *
 *		editor.execute( 'tableCellHeight', {
 *			value: '50'
 *		} );
 *
 * will set the `height` attribute to `'50px'` in the model.
 *
 * @extends module:table/tablecellproperties/commands/tablecellpropertycommand~TableCellPropertyCommand
 */
export default class TableCellHeightCommand extends TableCellPropertyCommand {
	/**
	 * Creates a new `TableCellHeightCommand` instance.
	 *
	 * @param editor An editor in which this command will be used.
	 * @param defaultValue The default value of the attribute.
	 */
	constructor( editor: Editor, defaultValue: string ) {
		super( editor, 'tableCellHeight', defaultValue );
	}

	/**
	 * @inheritDoc
	 */
	public override _getValueToSet( value?: string ): string | undefined {
		value = addDefaultUnitToNumericValue( value, 'px' );

		if ( value === this._defaultValue ) {
			return;
		}

		return value;
	}
}

declare module '@ckeditor/ckeditor5-core' {
	interface CommandsMap {
		tableCellHeight: TableCellHeightCommand;
	}
}
