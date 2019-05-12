using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using SLAPI;

namespace SLAPI.Controllers
{
    public class vPositionsController : ApiController
    {
        private StockLoanReportsEntities db = new StockLoanReportsEntities();



        // GET: api/vPositions
        [Route("api/u")]
        public IQueryable<vPosition> GetvPositions(string cusip = null, string ctpy = null)
        {
            DateTime dt = DateTime.Today.AddDays(-1);

            var p = db.vPositions.Where(x => x.DateOfData == dt);

            if (cusip != null)
            {
                p = p.Where(x => x.Cusip.ToLower() == cusip.ToLower());
            }

            if (ctpy != null)
            {
                p = p.Where(x => x.CtpyCode.ToLower() == ctpy.ToLower());
            }

            return p;
        }

        [Route("api/u/{cusip}")]
        public IQueryable<vPosition> GetvPositions(string cusip)
        {
            DateTime dt = DateTime.Today.AddDays(-1);
            return db.vPositions.Where(x => x.DateOfData == dt);
        }



        /*
        [Route("api/users/{cusip:string}")]
        public IQueryable<vPosition> GetvPositions(string cusip)
        {
            DateTime dt = DateTime.Today.AddDays(-1);
            return db.vPositions.Where(x => x.DateOfData == dt && x.Cusip != null && cusip != null && x.Cusip.ToLower() == cusip.ToLower());
        }
        */



        // GET: api/vPositions/5
        [ResponseType(typeof(vPosition))]
        public IHttpActionResult GetvPosition(int id)
        {
            vPosition vPosition = db.vPositions.Find(id);
            if (vPosition == null)
            {
                return NotFound();
            }

            return Ok(vPosition);
        }












        // PUT: api/vPositions/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutvPosition(int id, vPosition vPosition)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vPosition.PositionsID)
            {
                return BadRequest();
            }

            db.Entry(vPosition).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!vPositionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/vPositions
        [ResponseType(typeof(vPosition))]
        public IHttpActionResult PostvPosition(vPosition vPosition)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.vPositions.Add(vPosition);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (vPositionExists(vPosition.PositionsID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = vPosition.PositionsID }, vPosition);
        }

        
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool vPositionExists(int id)
        {
            return db.vPositions.Count(e => e.PositionsID == id) > 0;
        }
    }



}