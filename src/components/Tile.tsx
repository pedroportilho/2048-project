import { Tile } from "../aux/functions";

export type WrapperProps = { tile: Tile };

const TileView = (props: WrapperProps) => {
  const { value, mergedInto, row, column } = props.tile;

  let classArray = ["tile"];
  classArray.push(`tile${value}`);

  if (!mergedInto) {
    classArray.push(`position_${row}_${column}`);
  }

  if (mergedInto) {
    classArray.push("merged");
  }

  if (props.tile.isNew()) {
    classArray.push("new");
  }

  if (props.tile.hasMoved()) {
    classArray.push(
      `row_from_${props.tile.fromRow()}_to_${props.tile.toRow()}`
    );
    classArray.push(
      `column_from_${props.tile.fromColumn()}_to_${props.tile.toColumn()}`
    );
    classArray.push("isMoving");
  }

  let classes = classArray.join(" ");

  return <span className={classes}></span>;
};

export default TileView;
